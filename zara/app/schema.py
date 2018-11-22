import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation

from .forms import CounterForm, CounterRowForm, TotalForm, TotalRowForm
from .models import Counter, CounterRow, Total, TotalRow


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


class Query(graphene.ObjectType):
    """
    the grapql query object
    """

    detail_total = graphene.Field(TotalType, id=graphene.Int())
    detail_counter = graphene.Field(TotalType, id=graphene.Int())

    list_total = graphene.List(TotalType)
    list_counter = graphene.List(CounterType)

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


class Mutations(graphene.ObjectType):
    """
    the mutations graphql object
    """
    mutations_total = TotalMutation.Field()
    mutations_total_row = TotalRowMutation.Field()
    mutations_counter = CounterMutation.Field()
    mutations_counter_row = CounterRowMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)