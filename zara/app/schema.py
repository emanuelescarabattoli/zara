import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation

from .forms import CounterForm, CounterRowForm, TotalForm, TotalRowForm, TotalRowTotalForm
from .models import Counter, CounterRow, Total, TotalRow, TotalRowTotal


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


class TotalRowTotalType(DjangoObjectType):
    """
    total row total graphql object
    """

    class Meta:
        model = TotalRowTotal


class CounterMutation(DjangoModelFormMutation):
    """
    a counter mutation based on form
    """

    class Meta:
        form_class = CounterForm

    @classmethod
    def perform_mutate(cls, form, info):
        """
        add user before saving
        """
        obj = form.save(commit=False)
        obj.user = info.context.user
        obj.save()
        kwargs = {cls._meta.return_field_name: obj}
        return cls(errors=[], **kwargs)


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

    @classmethod
    def perform_mutate(cls, form, info):
        """
        add user before saving
        """
        obj = form.save(commit=False)
        obj.user = info.context.user
        obj.save()
        kwargs = {cls._meta.return_field_name: obj}
        return cls(errors=[], **kwargs)


class TotalRowMutation(DjangoModelFormMutation):
    """
    a total row mutation based on form
    """

    class Meta:
        form_class = TotalRowForm


class TotalRowTotalMutation(DjangoModelFormMutation):
    """
    a total row total mutation based on form
    """

    class Meta:
        form_class = TotalRowTotalForm


class CounterDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a counter
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        Counter.objects.filter(id=pk).delete()
        return CounterDeleteMutation(success=True)


class CounterRowDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a counter row
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


class TotalRowTotalDeleteMutation(graphene.Mutation):
    """
    a mutation to delete a total row total
    """

    class Arguments:
        pk = graphene.Int()

    success = graphene.Boolean()

    def mutate(self, info, pk):

        TotalRowTotal.objects.filter(id=pk).delete()
        return TotalRowTotalDeleteMutation(success=True)


class Query(graphene.ObjectType):
    """
    the graphql query object
    """

    me = graphene.Field(MeObject)

    detail_total = graphene.Field(TotalType, id=graphene.Int())
    detail_counter = graphene.Field(CounterType, id=graphene.Int())

    list_total = graphene.List(TotalType)
    list_counter = graphene.List(CounterType)

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
        return Total.objects.filter(user=info.context.user)

    def resolve_list_counter(self, info, **kwargs):
        """
        resolve the list of counters
        """
        return Counter.objects.filter(user=info.context.user)


class Mutations(graphene.ObjectType):
    """
    the mutations graphql object
    """

    mutation_total = TotalMutation.Field()
    mutation_total_row = TotalRowMutation.Field()
    mutation_total_row_total = TotalRowTotalMutation.Field()
    mutation_counter = CounterMutation.Field()
    mutation_counter_row = CounterRowMutation.Field()

    mutation_delete_counter = CounterDeleteMutation.Field()
    mutation_delete_counter_row = CounterRowDeleteMutation.Field()
    mutation_delete_total = TotalDeleteMutation.Field()
    mutation_delete_total_row = TotalRowDeleteMutation.Field()
    mutation_delete_total_row_total = TotalRowTotalDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
