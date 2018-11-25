import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation

from .forms import CounterForm, CounterRowForm, TotalForm, TotalRowForm
from .models import Counter, CounterRow, Total, TotalRow, CounterHistory, TotalHistory


class MeObject(graphene.ObjectType):
    """
    logged user info
    """

    username = graphene.String()


class CounterType(DjangoObjectType):
    """
    counter graphql object
    """

    class Meta:
        model = Counter


class CounterRowType(DjangoObjectType):
    """
    counter row graphql object
    """

    class Meta:
        model = CounterRow


class TotalType(DjangoObjectType):
    """
    total graphql object
    """

    class Meta:
        model = Total


class TotalRowType(DjangoObjectType):
    """
    total row graphql object
    """

    class Meta:
        model = TotalRow


class CounterHistoryType(DjangoObjectType):
    """
    counter history graphql object
    """

    class Meta:
        model = CounterHistory


class TotalHistoryType(DjangoObjectType):
    """
    total history graphql object
    """

    class Meta:
        model = TotalHistory


class CounterMutation(DjangoModelFormMutation):
    """
    a counter mutation based on form
    """

    class Meta:
        form_class = CounterForm


class CounterRowMutation(DjangoModelFormMutation):
    """
    a counter row mutation based on form
    """

    class Meta:
        form_class = CounterRowForm


class TotalMutation(DjangoModelFormMutation):
    """
    a total mutation based on form
    """

    class Meta:
        form_class = TotalForm


class TotalRowMutation(DjangoModelFormMutation):
    """
    a total row mutation based on form
    """

    class Meta:
        form_class = TotalRowForm


class CounterDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a couner
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        Counter.objects.filter(id=pk).delete()
        return CounterDeleteMutation(success=True)


class CounterRowDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a couner row
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        CounterRow.objects.filter(id=pk).delete()
        return CounterRowDeleteMutation(success=True)


class TotalDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a total
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        Total.objects.filter(id=pk).delete()
        return TotalDeleteMutation(success=True)


class TotalRowDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a total row
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        TotalRow.objects.filter(id=pk).delete()
        return TotalRowDeleteMutation(success=True)


class Query(graphene.ObjectType):
    """
    the grapql query object
    """

    me = graphene.Field(MeObject)

    detail_total = graphene.Field(TotalType, id=graphene.Int())
    detail_counter = graphene.Field(TotalType, id=graphene.Int())

    list_total = graphene.List(TotalType)
    list_counter = graphene.List(CounterType)
    list_counter_history = graphene.List(CounterHistoryType, counter_id=graphene.Int())
    list_total_history = graphene.List(TotalHistoryType, total_id=graphene.Int())

    def resolve_me(self, info, **kwargs):
        """
        me resolver
        """
        if info.context.user.is_authenticated:
            return MeObject(username=info.context.user.username)
        return None

    def resolve_detail_total(self, info, **kwargs):
        """
        resolve a single total by its id
        """
        id = kwargs.get("id")
        if id is not None:
            return Total.objects.get(pk=id)
        return None

    def resolve_detail_counter(self, info, **kwargs):
        """
        resolve a single counter by its id
        """
        id = kwargs.get("id")
        if id is not None:
            return Counter.objects.get(pk=id)
        return None

    def resolve_list_total(self, info, **kwargs):
        """
        resolve the list of totals
        """
        return Total.objects.all()

    def resolve_list_counter(self, info, **kwargs):
        """
        resolve the list of couters
        """
        return Counter.objects.all()

    def resolve_list_counter_history(self, info, **kwargs):
        """
        resolve the list of counter histry by counter id
        """
        counter_id = kwargs.get("id")
        if counter_id is not None:
            return CounterHistory.objects.filter(counter__id=counter_id).all()
        return None

    def resolve_list_total_history(self, info, **kwargs):
        """
        resolve the list of total histry by total id
        """
        total_id = kwargs.get("id")
        if total_id is not None:
            return TotalHistory.objects.filter(total__id=total_id).all()
        return None


class Mutations(graphene.ObjectType):
    """
    the mutations graphql object
    """

    mutation_total = TotalMutation.Field()
    mutation_total_row = TotalRowMutation.Field()
    mutation_counter = CounterMutation.Field()
    mutation_counter_row = CounterRowMutation.Field()

    mutation_delete_counter = CounterDeleteMutation.Field()
    mutation_delete_counter_row = CounterRowDeleteMutation.Field()
    mutation_delete_total = TotalDeleteMutation.Field()
    mutation_delete_total_row = TotalRowDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
